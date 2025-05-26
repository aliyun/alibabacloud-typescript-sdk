// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOfficeConversionTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The ending page for document conversion. The default value is -1, which converts the file until the last page of the file.
   * 
   * > 
   * 
   * *   If the source is a spreadsheet file, specify the index number of the corresponding sheet instead.
   * 
   * *   If you convert a large number of pages within the document, we recommend that you split the pages into several document conversion tasks to prevent conversion timeouts.
   * 
   * *   This parameter takes effect only when you convert the file into an image. It does not take effect when you convert the file into a PDF or TXT file.
   * 
   * @example
   * -1
   */
  endPage?: number;
  /**
   * @remarks
   * Specifies whether to return only the first resulting image when you convert a spreadsheet document to images. The number of rows and the number of columns in the first image are determined by the automatic splitting process. Valid values:
   * 
   * *   false (default): does not return only the first resulting image. All the resulting images are returned.
   * *   true: returns only the first resulting image. A thumbnail is generated.
   * 
   * >  This parameter takes effect only when the **LongPicture** parameter is set to `true`.
   * 
   * @example
   * false
   */
  firstPage?: boolean;
  /**
   * @remarks
   * Specifies whether to convert all rows of a spreadsheet document to one single image or a single-page PDF document when you convert the table document to an image or a PDF document. Valid values:
   * 
   * *   false (default): converts all rows of the document to multiple images or a multi-page PDF document. This is the default value.
   * *   true: converts all rows of the document to one single image or a single-page PDF document.
   * 
   * @example
   * false
   */
  fitToHeight?: boolean;
  /**
   * @remarks
   * Specifies whether to convert all columns of a spreadsheet document to one single image or a single-page PDF document when you convert the spreadsheet file to an image or a PDF document. Valid values:
   * 
   * *   false (default): converts all columns of the document to multiple images or a multi-page PDF document.
   * *   true: converts all columns of the document to one single image or a single-page PDF document.
   * 
   * @example
   * false
   */
  fitToWidth?: boolean;
  /**
   * @remarks
   * Specifies whether to retain line feeds in the output file when a document is converted to a text file. Valid values:
   * 
   * *   false (default): does not retain the line feeds.
   * *   true: retains the line feeds.
   * 
   * @example
   * false
   */
  holdLineFeed?: boolean;
  /**
   * @remarks
   * The dots per inch (DPI) of output images. Valid values: 96 to 600. Default value: 96.
   * 
   * @example
   * 96
   */
  imageDPI?: number;
  /**
   * @remarks
   * Specifies whether to convert the document to a long image. Valid values:
   * 
   * *   false (default): does not convert the document to a long image.
   * *   true: converts the document to a long image.
   * 
   * >  You can convert up to 20 pages of a document into a long image. If you convert more than 20 pages to a long image, an error may occur.
   * 
   * @example
   * false
   */
  longPicture?: boolean;
  /**
   * @remarks
   * Specifies whether to convert the document to a long text file. Valid values:
   * 
   * *   false (default): does not convert the document to a long text file. Each page of the document is converted to a text file.
   * *   true: converts the entire document to a long text file.
   * 
   * @example
   * false
   */
  longText?: boolean;
  /**
   * @remarks
   * The maximum number of spreadsheet columns to be converted to an image. By default, all columns within the spreadsheet file are converted.
   * 
   * >  This parameter takes effect only when the **LongPicture** parameter is set to `true`.
   * 
   * @example
   * 10
   */
  maxSheetColumn?: number;
  /**
   * @remarks
   * The maximum number of spreadsheet rows to be converted to an image. By default, all rows within the spreadsheet file are converted.
   * 
   * >  This parameter takes effect only when the **LongPicture** parameter is set to `true`.
   * 
   * @example
   * 10
   */
  maxSheetRow?: number;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The numbers of pages to be converted. This parameter takes precedence over the StartPage and EndPage parameters. The value of this parameter can be in different formats:
   * 
   * *   If you specify pages separately by page number, separate page numbers with commas (,). Example: 1,2
   * *   If you specify consecutive pages by using a page range, connect the starting and ending page numbers with a hyphen (-). Example: 1,2-4,7
   * 
   * @example
   * 1,2-4,7
   */
  pages?: string;
  /**
   * @remarks
   * Specifies whether to place sheets of paper horizontally for converting a spreadsheet document to images. Conversion to images is similar to printing the content on a sheet of paper. Valid values:
   * 
   * *   false (default): does not place sheets of paper horizontally. Paper sheets are placed vertically.
   * *   true: places sheets of paper horizontally.
   * 
   * @example
   * false
   */
  paperHorizontal?: boolean;
  /**
   * @remarks
   * The paper size for converting a spreadsheet document to images. Conversion to images is similar to printing the content on a sheet of paper. Valid values:
   * 
   * *   A0
   * *   A2
   * *   A4 (default)
   * 
   * >  This parameter takes effect only when the **FitToHeight** and **FitToWidth** parameters are specified.
   * 
   * @example
   * A4
   */
  paperSize?: string;
  /**
   * @remarks
   * The password that protects the source document. To convert a password-protected document, specify this parameter.
   * 
   * @example
   * ********
   */
  password?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The quality of the output file. Valid values: 0 to 100. A smaller value indicates lower quality and better conversion performance. By default, the system specifies an appropriate value that provides an optimal balance between the quality and conversion performance based on the document content.
   * 
   * @example
   * 60
   */
  quality?: number;
  /**
   * @remarks
   * The percentage scale relative to the source document. Valid values: 20 to 200. The default value is 100, which indicates that the document is not scaled.
   * 
   * >  A value that is less than 100 indicates a size reduction. A value that is greater than 100 indicates an enlargement.
   * 
   * @example
   * 100
   */
  scalePercentage?: number;
  /**
   * @remarks
   * The number of sheets to be converted to an image. By default, all sheets within the spreadsheet file are converted.
   * 
   * @example
   * 1
   */
  sheetCount?: number;
  /**
   * @remarks
   * The index number of the sheet to be converted to an image. The value ranges from 1 to the index number of the last sheet. By default, the conversion starts from the first sheet.
   * 
   * @example
   * 1
   */
  sheetIndex?: number;
  /**
   * @remarks
   * Specifies whether to display comments in resulting images when a text document is converted to images. Valid values:
   * 
   * *   false (default): does not display comments in resulting images.
   * *   true: displays comments in resulting images.
   * 
   * @example
   * false
   */
  showComments?: boolean;
  /**
   * @remarks
   * The name extension of the source file. By default, the type of the source file is determined based on the name extension of the source object in OSS. If the object in OSS does not have a name extension, you can specify this parameter. Valid values:
   * 
   * *   Text documents: doc, docx, wps, wpss, docm, dotm, dot, dotx, and html
   * *   Presentation documents: pptx, ppt, pot, potx, pps, ppsx, dps, dpt, pptm, potm, ppsm, and dpss
   * *   Spreadsheet documents: xls, xlt, et, ett, xlsx, xltx, csv, xlsb, xlsm, xltm, and ets
   * *   PDF documents: pdf
   * 
   * @example
   * doc
   */
  sourceType?: string;
  /**
   * @remarks
   * The URI of the source file.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  sourceURI?: string;
  sourcesShrink?: string;
  /**
   * @remarks
   * The starting page for document conversion. Default value: 1.
   * 
   * > 
   * 
   * *   If the document is a spreadsheet file, specify the index number of the corresponding sheet instead.
   * 
   * *   This parameter takes effect only when you convert the file to an image format. It does not take effect when you convert the file into a PDF or TXT file.
   * 
   * @example
   * 1
   */
  startPage?: number;
  /**
   * @remarks
   * The custom tags in dictionary format. You can use the custom tags to search for the task.
   * 
   * @example
   * {"test":"val1"}
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The format of the output file. Valid values:
   * 
   * *   png: a PNG image.
   * *   jpg: a JPG image.
   * *   pdf: a PDF file.
   * *   txt: a TXT file. You can specify this value to extract the text content of the source document. Only presentation, text, or spreadsheet documents can be converted to a TXT file. If the source document is a spreadsheet, only one TXT is created and sheet-related parameters do not take effect.
   * 
   * This parameter is required.
   * 
   * @example
   * png
   */
  targetType?: string;
  /**
   * @remarks
   * The address template of the output file.
   * 
   * Specify the value in the `oss://{bucket}/{tags.custom}/{dirname}/{barename}.{autoext}` format. For more information, see [TargetURI template](https://help.aliyun.com/document_detail/465762.html).
   * 
   * >  Specify at least one of the TargetURI and TargetURIPrefix parameters.
   * 
   * @example
   * oss://{bucket}/{tags.custom}/{dirname}/{barename}.{autoext}
   */
  targetURI?: string;
  /**
   * @remarks
   * The prefix of the storage address of the output file.
   * 
   * Specify the prefix in the `oss://${Bucket}/${Prefix}/` format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Prefix}` is the prefix of the output file.
   * 
   * >  Specify at least one of the TargetURI and TargetURIPrefix parameters.
   * 
   * @example
   * oss://bucket1/
   */
  targetURIPrefix?: string;
  /**
   * @remarks
   * The trim policy for converting a spreadsheet file. Empty rows and columns may generate blank spaces in the output file if no appropriate trim policy is specified.
   */
  trimPolicyShrink?: string;
  /**
   * @remarks
   * The custom information, which is returned in an asynchronous notification and facilitates notification management. The maximum information length is 2,048 bytes.
   * 
   * @example
   * {"file_id": "abc"}
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

