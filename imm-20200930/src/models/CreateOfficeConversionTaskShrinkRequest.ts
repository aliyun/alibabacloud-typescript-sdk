// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOfficeConversionTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **If you do not have special requirements, leave this parameter empty.**
   * 
   * The chained authorization configuration. This parameter is not required. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The end page for the document conversion. The default value is -1, which indicates that all pages from the start page to the last page are converted.
   * 
   * > - If the source file is a spreadsheet, you must specify the worksheet number (\\`SheetIndex\\`).
   * >
   * > - If the document has many pages, we recommend that you convert them in batches. Otherwise, the conversion may time out.
   * >
   * > - This parameter takes effect only when you convert the document to images. It does not take effect when you convert the document to a PDF file or a text file.
   * 
   * @example
   * -1
   */
  endPage?: number;
  /**
   * @remarks
   * When you convert a spreadsheet document to images, specifies whether to return only the first image of the conversion result. The number of rows and columns in the image is the result of automatic splitting. Valid values:
   * 
   * - false (default): No. All images are returned.
   * 
   * - true: Yes. Only the first image is returned. This is used to extract a thumbnail.
   * 
   * > This parameter takes effect only if you set the **LongPicture** parameter to `true`.
   * 
   * @example
   * false
   */
  firstPage?: boolean;
  /**
   * @remarks
   * When you convert a spreadsheet document to images or a PDF file, specifies whether to render all rows on a single image or PDF page. Valid values:
   * 
   * - false (default): No. The content is rendered on multiple images or PDF pages.
   * 
   * - true: Yes. The content is rendered on a single image or PDF page.
   * 
   * @example
   * false
   */
  fitToHeight?: boolean;
  /**
   * @remarks
   * When you convert a spreadsheet document to images or a PDF file, specifies whether to render all columns on a single image or PDF page. Valid values:
   * 
   * - false (default): No. The content is rendered on multiple images or PDF pages.
   * 
   * - true: Yes. The content is rendered on a single image or PDF page.
   * 
   * @example
   * false
   */
  fitToWidth?: boolean;
  /**
   * @remarks
   * When you convert a document to text, specifies whether to keep the line feeds in the document. Valid values:
   * 
   * - false (default): No. Line feeds are not kept.
   * 
   * - true: Yes. Line feeds are kept.
   * 
   * @example
   * false
   */
  holdLineFeed?: boolean;
  /**
   * @remarks
   * The DPI of the output image. Valid values: 96 to 600. The default value is 96.
   * 
   * @example
   * 96
   */
  imageDPI?: number;
  /**
   * @remarks
   * When you convert a document to images, specifies whether to convert it into a long image. Valid values:
   * 
   * - false (default): No. The document is converted into multiple images.
   * 
   * - true: Yes. The document is converted into a long image.
   * 
   * > You can combine a maximum of 20 pages into a long image. If the number of pages exceeds this limit, the conversion task may fail.
   * 
   * @example
   * false
   */
  longPicture?: boolean;
  /**
   * @remarks
   * When you convert a document to text, specifies whether to convert it into a long text file. Valid values:
   * 
   * - false (default): No. Each page of the document is converted into a separate text file.
   * 
   * - true: Yes. All content is placed in a single text file.
   * 
   * @example
   * false
   */
  longText?: boolean;
  /**
   * @remarks
   * The maximum number of columns to convert when you convert a spreadsheet document to images. By default, all columns are converted.
   * 
   * > This parameter takes effect only when you set **LongPicture** to `true`.
   * 
   * @example
   * 10
   */
  maxSheetColumn?: number;
  /**
   * @remarks
   * The maximum number of rows to convert when you convert a spreadsheet document to images. By default, all rows are converted.
   * 
   * > This parameter takes effect only when you set **LongPicture** to `true`.
   * 
   * @example
   * 10
   */
  maxSheetRow?: number;
  /**
   * @remarks
   * The message notification configuration. For more information, click Notification. For more information about the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The page numbers to convert. This parameter has a higher priority than the \\`StartPage\\` and \\`EndPage\\` parameters. The format is as follows:
   * 
   * - Separate multiple page numbers with commas (,), for example, 1,2.
   * 
   * - Specify a range of consecutive pages with a hyphen (-), for example, 1,2-4,7.
   * 
   * @example
   * 1,2-4,7
   */
  pages?: string;
  /**
   * @remarks
   * When you convert a spreadsheet document to images, specifies whether to place the paper horizontally. The output image is similar to a printed page. Valid values:
   * 
   * - false (default): No. The paper is placed vertically.
   * 
   * - true: Yes. The paper is placed horizontally.
   * 
   * @example
   * false
   */
  paperHorizontal?: boolean;
  /**
   * @remarks
   * The paper size for converting a spreadsheet document to images. The output image is similar to a printed page. Valid values:
   * 
   * - A0
   * 
   * - A2
   * 
   * - A4 (default)
   * 
   * > This parameter takes effect only when you use it with the **FitToHeight** and **FitToWidth** parameters.
   * 
   * @example
   * A4
   */
  paperSize?: string;
  /**
   * @remarks
   * The password to open the document. Set this parameter if you want to convert a password-protected document.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The project name. For more information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The quality of the converted file. Valid values: 0 to 100. A value of 0 indicates the lowest quality and the best performance. A value of 100 indicates the highest quality and the poorest performance. By default, the system sets an appropriate value based on the document content to balance quality and performance.
   * 
   * @example
   * 60
   */
  quality?: number;
  /**
   * @remarks
   * The scaling ratio of the document. Valid values: 20 to 199. The default value is 100, which indicates that the document is not scaled.
   * 
   * > A value less than 100 indicates that the document is scaled down. A value greater than 100 indicates that the document is scaled up.
   * 
   * @example
   * 100
   */
  scalePercentage?: number;
  /**
   * @remarks
   * The number of worksheets to convert to images in the spreadsheet document. By default, all worksheets are converted.
   * 
   * @example
   * 1
   */
  sheetCount?: number;
  /**
   * @remarks
   * The number of the worksheet to convert to images in the spreadsheet document. Valid values: 1 to the number of the last worksheet. The default value is 1.
   * 
   * @example
   * 1
   */
  sheetIndex?: number;
  /**
   * @remarks
   * When you convert a word processor document to images, specifies whether to show comments. Valid values:
   * 
   * - false (default): No. Comments are not shown.
   * 
   * - true: Yes. Comments are shown.
   * 
   * @example
   * false
   */
  showComments?: boolean;
  /**
   * @remarks
   * The extension type of the source data. By default, the type of the source data is determined by the extension of the OSS object. If the OSS object does not have an extension, you can set this parameter. Valid values:
   * 
   * - Word processor documents (Word): doc, docx, wps, wpss, docm, dotm, dot, and dotx
   * 
   * - Presentation documents (PowerPoint): pptx, ppt, pot, potx, pps, ppsx, dps, dpt, pptm, potm, ppsm, and dpss
   * 
   * - Spreadsheet documents (Excel): xls, xlt, et, ett, xlsx, xltx, csv, xlsb, xlsm, xltm, and ets
   * 
   * - PDF documents: pdf
   * 
   * @example
   * doc
   */
  sourceType?: string;
  /**
   * @remarks
   * The storage address of the source data.
   * 
   * The OSS address must be in the oss\\://${Bucket}/${Object} format. \\`${Bucket}\\` is the name of the OSS bucket that is in the same region as the current project. \\`${Object}\\` is the full path of the file, including the file name extension.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  /**
   * @remarks
   * A list of input images. The images are converted in the order of their URIs in the list. (**This parameter is not yet published. Do not use it.**)
   * 
   * @example
   * oss://imm-test/test.pptx
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * The start page for the document conversion. The default value is 1.
   * 
   * > - If the source file is a spreadsheet, you must specify the worksheet number.
   * >
   * > - This parameter takes effect only when you convert the document to images. It does not take effect when you convert the document to a PDF file or a text file.
   * 
   * @example
   * 1
   */
  startPage?: number;
  /**
   * @remarks
   * The custom tags. The value is a dictionary. You can use tags to search for tasks.
   * 
   * @example
   * {
   *       "key": "value"
   * }
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The type of the output file. Valid values:
   * 
   * - png: Converts the document to PNG images.
   * 
   * - jpg: Converts the document to JPG images.
   * 
   * - pdf: Converts the document to a PDF file.
   * 
   * - txt: Converts the document to a text-only file. This is mainly used to extract text content from the file. This option is supported only for presentation documents, word processor documents, and spreadsheet documents. When you convert a spreadsheet document, a single txt file is generated, and settings for sheet-related variables do not take effect.
   * 
   * This parameter is required.
   * 
   * @example
   * png
   */
  targetType?: string;
  /**
   * @remarks
   * The template for the output address of the converted document.
   * 
   * The address must be in the `oss://{bucket}/{tags.custom}/{dirname}/{barename}.{autoext}` format. For more information, see [TargetURI templates](https://help.aliyun.com/document_detail/465762.html).
   * 
   * > Specify either this parameter or \\`TargetURIPrefix\\`.
   * 
   * @example
   * oss://examplebucket/outputDocument.pdf
   */
  targetURI?: string;
  /**
   * @remarks
   * The prefix of the storage address for the output file after document conversion.
   * 
   * The prefix must be in the `oss://${Bucket}/${Prefix}/` format. \\`${Bucket}\\` is the name of the OSS bucket that is in the same region as the current project. \\`${Prefix}\\` is the prefix of the storage address for the output file.
   * 
   * > Specify either this parameter or \\`TargetURI\\`.
   * 
   * @example
   * oss://examplebucket/outputprefix/
   */
  targetURIPrefix?: string;
  /**
   * @remarks
   * The trimming policy for spreadsheet conversion. For example, if a spreadsheet contains many empty rows and columns, a large amount of white space may be generated if no trimming policy is specified.
   */
  trimPolicyShrink?: string;
  /**
   * @remarks
   * The custom information. This information is returned in the asynchronous notification message to help you associate the notification with your services. The value can be up to 2,048 bytes in length.
   * 
   * @example
   * {
   *       "id": "test-id",
   *       "name": "test-name"
   * }
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      endPage: 'EndPage',
      firstPage: 'FirstPage',
      fitToHeight: 'FitToHeight',
      fitToWidth: 'FitToWidth',
      holdLineFeed: 'HoldLineFeed',
      imageDPI: 'ImageDPI',
      longPicture: 'LongPicture',
      longText: 'LongText',
      maxSheetColumn: 'MaxSheetColumn',
      maxSheetRow: 'MaxSheetRow',
      notificationShrink: 'Notification',
      pages: 'Pages',
      paperHorizontal: 'PaperHorizontal',
      paperSize: 'PaperSize',
      password: 'Password',
      projectName: 'ProjectName',
      quality: 'Quality',
      scalePercentage: 'ScalePercentage',
      sheetCount: 'SheetCount',
      sheetIndex: 'SheetIndex',
      showComments: 'ShowComments',
      sourceType: 'SourceType',
      sourceURI: 'SourceURI',
      sourcesShrink: 'Sources',
      startPage: 'StartPage',
      tagsShrink: 'Tags',
      targetType: 'TargetType',
      targetURI: 'TargetURI',
      targetURIPrefix: 'TargetURIPrefix',
      trimPolicyShrink: 'TrimPolicy',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      endPage: 'number',
      firstPage: 'boolean',
      fitToHeight: 'boolean',
      fitToWidth: 'boolean',
      holdLineFeed: 'boolean',
      imageDPI: 'number',
      longPicture: 'boolean',
      longText: 'boolean',
      maxSheetColumn: 'number',
      maxSheetRow: 'number',
      notificationShrink: 'string',
      pages: 'string',
      paperHorizontal: 'boolean',
      paperSize: 'string',
      password: 'string',
      projectName: 'string',
      quality: 'number',
      scalePercentage: 'number',
      sheetCount: 'number',
      sheetIndex: 'number',
      showComments: 'boolean',
      sourceType: 'string',
      sourceURI: 'string',
      sourcesShrink: 'string',
      startPage: 'number',
      tagsShrink: 'string',
      targetType: 'string',
      targetURI: 'string',
      targetURIPrefix: 'string',
      trimPolicyShrink: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

