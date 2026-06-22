// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWebofficeTokenShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable cached preview.
   * 
   * -  true: When enabled, the document preview no longer updates collaborative editing content. This is suitable for preview-only scenarios.
   * -  false: When disabled, collaborative preview is used by default, which synchronizes collaborative editing content during preview.
   * 
   * >Notice: Cached preview and non-cached preview have different unit prices. For more information, see the billing item description.
   * </notice>>Notice: Cached preview does not support document content search or printing.</notice>
   * <notice>Cached preview does not support updating cached content.</notice>.
   * 
   * @example
   * true
   */
  cachePreview?: boolean;
  /**
   * @remarks
   * **Leave this parameter empty unless you have specific requirements.**
   * 
   * The China authorization configuration. This parameter is optional. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * Specifies whether uploading a file with the same name to OSS is expected behavior. Valid values:
   * 
   * - true: Uploading a file with the same name to OSS is expected behavior. The uploaded document overwrites the original document and generates a new version. After this parameter is set to true, you must first close the document that is being edited, wait about 5 minutes, and then reopen it to load the new document. The upload takes effect only when the document is closed. If the document is open, new saves overwrite the uploaded file.
   * - false (default): Uploading a file with the same name to OSS is not expected behavior. The operation returns an error.
   * 
   * @example
   * false
   */
  externalUploaded?: boolean;
  /**
   * @remarks
   * The file name, which must include the file name extension. The default value is the last segment of the **SourceURI** parameter.
   * 
   * Supported file name extensions (PDF supports preview only):
   * 
   * - Word documents: doc, docx, txt, dot, wps, wpt, dotx, docm, dotm, and rtf
   * - PowerPoint documents: ppt, pptx, pptm, ppsx, ppsm, pps, potx, potm, dpt, and dps
   * - Excel documents: et, xls, xlt, xlsx, xlsm, xltx, xltm, and csv
   * - PDF documents: pdf.
   * 
   * @example
   * test-Object.pptx
   */
  filename?: string;
  /**
   * @remarks
   * Specifies whether to hide the toolbar. This parameter is supported in document preview mode. Valid values:
   * 
   * - false (default): The toolbar is not hidden.
   * 
   * - true: The toolbar is hidden.
   * 
   * @example
   * false
   */
  hidecmb?: boolean;
  /**
   * @remarks
   * The notification configuration. Currently, only MNS is supported. For the format of asynchronous notification messages, see [WebOffice message notification format](https://help.aliyun.com/document_detail/2743999.html).
   * 
   * > Message notifications are sent when a file is saved or renamed.
   */
  notificationShrink?: string;
  /**
   * @remarks
   * Sends event notifications to you as MNS messages. This parameter specifies the MNS topic for asynchronous message notifications.
   * 
   * @example
   * test-topic
   */
  notifyTopicName?: string;
  /**
   * @remarks
   * The password to open the document.
   * > Set this parameter if you want to preview or edit a password-protected document.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The user permission information in JSON format.
   * 
   * User permissions include the following options:
   * 
   * Each option is of the Boolean type. The default value is false. Valid values: true and false.
   * 
   * - Readonly (optional): Preview mode.
   * 
   * - Rename (optional): The permission to rename a file. Only message notification is provided. The rename event is sent to MNS.
   * 
   * - History (optional): The permission to view historical versions.
   * 
   * - Copy (optional): The copy permission.
   * 
   * - Export (optional): The permission to export to PDF.
   * 
   * - Print (optional): The print permission.
   * 
   * 
   * > PDF supports only the preview feature. You must set the Readonly parameter to true.
   * >
   * 
   * > PDF files do not support export.
   * > 
   * 
   * > To use the versioning feature, you must first enable versioning in OSS and then set the History parameter to true.
   * >
   * >Notice: Printing is not supported in cached preview.
   * >Notice: Historical versions can be viewed in edit mode but not in preview mode..
   */
  permissionShrink?: string;
  /**
   * @remarks
   * The maximum number of pages that can be previewed. By default, no limit is imposed. The maximum value is 5,000.
   * 
   * @example
   * 5
   */
  previewPages?: number;
  /**
   * @remarks
   * The project name. For information about how to obtain the project name, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The OSS hotlink protection referer. Intelligent Media Management (IMM) needs to retrieve the source file from OSS. If hotlink protection is configured for OSS, IMM must pass the corresponding header to OSS to retrieve the source file.
   * > Set this parameter if the bucket that stores the document has a referer configured.
   * 
   * @example
   * *
   */
  referer?: string;
  /**
   * @remarks
   * The OSS URI of the document to preview or edit.
   * 
   * The OSS URI follows the format `oss://${Bucket}/${Object}`, where `Bucket` is the name of an OSS bucket in the same region as the current project, and `Object` is the full path of the file including the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object.docx
   */
  sourceURI?: string;
  /**
   * @remarks
   * The user information. You can pass in user information from the business side, and the WebOffice page displays this information.
   * 
   * The system distinguishes different users by User.Id. User.Name is used only for frontend display. If User.Id is not specified, the backend automatically generates a random ID. Users with different IDs are treated as different principals and cannot modify or delete each other\\"s comments.
   * 
   * The default format is: Unknown_RandomString. If User.Id is not specified, the user information is displayed as "Unknown" by default.
   */
  userShrink?: string;
  /**
   * @remarks
   * The custom user data. This parameter takes effect only when the Notification parameter is specified with MNS configurations. The data is returned in asynchronous message notifications for you to associate and process message notifications within your system. Maximum length: 2,048 bytes.
   * 
   * @example
   * {
   *       "id": "test-id",
   *       "name": "test-name"
   * }
   */
  userData?: string;
  /**
   * @remarks
   * The watermark information. The watermark is generated on the frontend and is not written to the source document. Different parameters passed for the same document produce different watermarks.
   */
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

