interface ImageConverter {
  __mammothBrand: "ImageConverter";
}

export interface ConvertOptions {
  styleMap?: string | Array<string>;
  includeEmbeddedStyleMap?: boolean;
  includeDefaultStyleMap?: boolean;
  convertImage?: ImageConverter;
  ignoreEmptyParagraphs?: boolean;
  idPrefix?: string;
  transformDocument?: (element: any) => any;
}

export interface WordToHtmlPluginOptions {
  className?: {
    [x: string]: boolean;
  } | string | Array<string>;
  convertOptions?: ConvertOptions
}
