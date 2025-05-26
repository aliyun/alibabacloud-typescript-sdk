// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWebofficeTokenShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable cache preview.
   * 
   * *   true: enables cache preview. The document can be previewed only and cannot be collaboratively edited.
   * *   false: does not enable cache preview. The document can be collaboratively edited when it is being previewed.
   * 
   * >  The pricing for document previews varies based on whether cache preview is enabled or disabled.
   * 
   * >  During a cache preview, document content search and printing are not supported.
   * 
   * @example
   * false
   */
  cachePreview?: boolean;
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The configurations of authorization chains. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * Specifies whether to allow an upload of a document to the Object Storage Service (OSS) bucket. Valid values:
   * 
   * *   true: Documents can be directly uploaded to OSS. The uploaded document overwrites the existing document and a new version is generated for the document. Before you upload a new document, close the existing document if it is being edited. After the document is uploaded, wait for approximately 5 minutes before you open the document again so that the new version can successfully load. Upload a new document only when the existing is closed. Otherwise, the uploaded document is overwritten when the existing document is saved.
   * *   false: Documents cannot be directly uploaded to OSS. If you try to upload a document, an error is returned. This is the default value.
   * 
   * @example
   * false
   */
  externalUploaded?: boolean;
  /**
   * @remarks
   * The name of the file. The extension must be included in the file name. By default, this parameter is set to the last depth level of the **SourceURI** parameter value.
   * 
   * Supported extensions (only preview supported for .pdf):
   * 
   * *   Word documents: .doc, .docx, .txt, .dot, .wps, .wpt, .dotx, .docm, .dotm, and .rtf
   * *   Presentation documents: .ppt, .pptx, .pptm, .ppsx, .ppsm, .pps, .potx, .potm, .dpt, and .dps
   * *   Table documents: .et, .xls, .xlt, .xlsx, .xlsm, .xltx, .xltm, and .csv
   * *   PDF documents: .pdf
   * 
   * @example
   * test.pptx
   */
  filename?: string;
  /**
   * @example
   * false
   */
  hidecmb?: boolean;
  /**
   * @remarks
   * The notification settings. Only SMQ messages are supported. For more information, see [WebOffice message example](https://help.aliyun.com/document_detail/2743999.html).
   * 
   * >  A notification is sent after the document is saved or renamed.
   */
  notificationShrink?: string;
  /**
   * @example
   * topic1
   */
  notifyTopicName?: string;
  /**
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The user permission settings in the JSON format.
   * 
   * The parameter supports the following permission fields:
   * 
   * Each field is of type Boolean and can have a value of true and false (the default value):
   * 
   * *   Readonly: grants the permission to preview the document. This field is optional.
   * *   Rename: grants the permission to rename the document. Notification messages of a rename event can be sent only by using SMQ. This field is optional.
   * *   History: grants the permission to view historical versions. This field is optional.
   * *   Copy: grants the permission to copy the document. This field is optional.
   * *   Export: grants the permission to export the document as a PDF file. This field is optional.
   * *   Print: grants the permission to print the document. This field is optional.
   * 
   * >  Only online preview is supported for PDF documents. When you call the operation on a PDF document, you can set Readonly only to true.
   * 
   * >  To manage multiple versions of the document, you must enable versioning for the bucket that stores the document and set the History parameter to true.
   * 
   * >  Printing is not supported during cache preview.
   */
  permissionShrink?: string;
  /**
   * @example
   * 5
   */
  previewPages?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @example
   * *
   */
  referer?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://imm-test/test.pptx
   */
  sourceURI?: string;
  /**
   * @remarks
   * The user information. The user information that you want to display on the WebOffice page. If you do not specify this parameter, the user name displayed is Unknown.
   */
  userShrink?: string;
  /**
   * @remarks
   * The user-defined data that you want to return in asynchronous messages. This parameter takes effect only when you specify the MNS settings in the Notification parameter. The maximum length of the value is 2,048 bytes.
   * 
   * @example
   * {"file_id": "abc"}
   */
  userData?: string;
  watermarkShrink?: string;
  static names(): { [key: string]: string } {
    return {
      cachePreview: 'CachePreview',
      credentialConfigShrink: 'CredentialConfig',
      externalUploaded: 'ExternalUploaded',
      filename: 'Filename',
      hidecmb: 'Hidecmb',
      notificationShrink: 'Notification',
      notifyTopicName: 'NotifyTopicName',
      password: 'Password',
      permissionShrink: 'Permission',
      previewPages: 'PreviewPages',
      projectName: 'ProjectName',
      referer: 'Referer',
      sourceURI: 'SourceURI',
      userShrink: 'User',
      userData: 'UserData',
      watermarkShrink: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cachePreview: 'boolean',
      credentialConfigShrink: 'string',
      externalUploaded: 'boolean',
      filename: 'string',
      hidecmb: 'boolean',
      notificationShrink: 'string',
      notifyTopicName: 'string',
      password: 'string',
      permissionShrink: 'string',
      previewPages: 'number',
      projectName: 'string',
      referer: 'string',
      sourceURI: 'string',
      userShrink: 'string',
      userData: 'string',
      watermarkShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

