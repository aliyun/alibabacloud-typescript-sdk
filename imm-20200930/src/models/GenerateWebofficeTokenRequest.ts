// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";
import { WebofficePermission } from "./WebofficePermission";
import { WebofficeUser } from "./WebofficeUser";
import { WebofficeWatermark } from "./WebofficeWatermark";


export class GenerateWebofficeTokenRequest extends $dara.Model {
  /**
   * @remarks
   * Cache preview flag: 
   * - true: When enabled, the document preview will no longer update collaborative editing content, suitable for scenarios where only preview is needed. 
   * - false: When disabled, it defaults to collaborative preview, allowing the preview to synchronously update collaborative editing content.
   * >Notice: The price for cache preview and non-cache preview differs. Please refer to the billing item description for more details.</notice> >Notice: Search and print functions are not supported during cache preview.</notice> <notice>Updating cached content is currently not supported in cache preview mode.</notice>
   * 
   * @example
   * true、false
   */
  cachePreview?: boolean;
  /**
   * @remarks
   * **If there are no special requirements, leave this blank.**
   * 
   * Chained authorization configuration, not required. For more information, see [Using Chained Authorization to Access Other Entity Resources](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * Indicates whether uploading a file with the same name to OSS is an expected behavior. Possible values are as follows:
   * 
   * - true: Uploading a file with the same name to OSS is an expected behavior. The uploaded document will overwrite the original document and generate a new version. After setting it to true, you still need to close the currently editing document and wait for about 5 minutes before reopening it to load the new document. The upload is only effective when the document is closed; if the document is open, the new save will overwrite the uploaded file.
   * - false (default): Uploading a file with the same name to OSS is not an expected behavior, and the interface will return an error.
   * 
   * @example
   * false
   */
  externalUploaded?: boolean;
  /**
   * @remarks
   * Filename, which must include the file extension. By default, it is the last segment of the **SourceURI** parameter.
   * Supported file extensions (PDF is only supported for preview):
   * - Text documents (Word): doc, docx, txt, dot, wps, wpt, dotx, docm, dotm, rtf 
   * - Presentation documents (PPT): ppt, pptx, pptm, ppsx, ppsm, pps, potx, potm, dpt, dps - Spreadsheet documents (Excel): et, xls, xlt, xlsx, xlsm, xltx, xltm, csv 
   * - PDF documents: pdf
   * 
   * @example
   * test-Object.pptx
   */
  filename?: string;
  /**
   * @remarks
   * Whether to hide the toolbar. This parameter can be set in document preview mode. Possible values are as follows:
   * 
   * - false (default): Do not hide the toolbar.
   * - true: Hide the toolbar.
   * 
   * @example
   * false
   */
  hidecmb?: boolean;
  /**
   * @remarks
   * Notification message configuration, currently supporting only MNS. For the asynchronous notification message format, refer to [WebOffice Message Notification Format](https://help.aliyun.com/document_detail/2743999.html).
   * 
   * > There will be message notifications when the file is saved or renamed.
   */
  notification?: Notification;
  /**
   * @remarks
   * Supports notifying some events to customers via MNS messages. This parameter is the topic for MNS asynchronous message notifications.
   * 
   * @example
   * test-topic
   */
  notifyTopicName?: string;
  /**
   * @remarks
   * The password to open the document.
   * > If you need to preview or edit a password-protected document, set this parameter.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * User permission information, represented in JSON format.
   * 
   * User permissions include the following options:
   * 
   * Each option is of type Boolean, with a default value of false, and can be set to true or false.
   * 
   * - Readonly (optional): Preview mode.
   * - Rename (optional): File renaming permission, which only provides message notification functionality. The renaming event will be sent to MNS.
   * - History (optional): Permission to view historical versions.
   * - Copy (optional): Copy permission.
   * - Export (optional): PDF export permission.
   * - Print (optional): Print permission.
   * 
   * >PDF only supports preview functionality, so the "Readonly" parameter must be set to true.
   * >
   * >PDF files do not support exporting.
   * > 
   * >To use the multi-version feature, you must first enable the multi-version feature in OSS and then set the "History" parameter to true.
   * >
   * >Notice: Printing is not supported in cached preview.
   * >Notice: Historical versions can be viewed in edit mode but not in preview mode.
   */
  permission?: WebofficePermission;
  /**
   * @remarks
   * Limits the number of pages that can be previewed. By default, there is no limit. The maximum cannot exceed 5000.
   * 
   * @example
   * 5
   */
  previewPages?: number;
  /**
   * @remarks
   * Project name, for how to obtain it, please refer to [Create Project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * OSS anti-leeching. IMM needs to obtain the source file from OSS. If OSS has set up anti-leeching, IMM must pass the corresponding header to OSS to get the source file.
   * > If the Bucket where the document is located has Referer set, please configure this parameter.
   * 
   * @example
   * *
   */
  referer?: string;
  /**
   * @remarks
   * OSS address of the document to be previewed or edited. The OSS address follows the rule `oss://${Bucket}/${Object}`, where `Bucket` is the name of the OSS Bucket in the same region as the current project, and `Object` is the full path of the file including the file extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object.docx
   */
  sourceURI?: string;
  /**
   * @remarks
   * User information. You can pass in user information from the business side, which will be displayed on the WebOffice page.
   * 
   * The system distinguishes different users by User.Id, and User.Name is used only for front-end display. If User.Id is not provided, the backend will generate a random ID. Users with different IDs are considered different entities and cannot modify or delete each other\\"s comments.
   * 
   * The default format is: Unknown_random string. If User.Id is not provided, the user information will default to "Unknown".
   */
  user?: WebofficeUser;
  /**
   * @remarks
   * User-defined information. It only takes effect when Notification parameters are filled in for MNS configuration. It will be returned in asynchronous message notifications, which can help you correlate and process messages within your system. The maximum length is 2048 bytes.
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
   * Watermark information. The watermark is generated on the front end and is not written into the source document. The same document with different parameters will result in different watermarks.
   */
  watermark?: WebofficeWatermark;
  static names(): { [key: string]: string } {
    return {
      cachePreview: 'CachePreview',
      credentialConfig: 'CredentialConfig',
      externalUploaded: 'ExternalUploaded',
      filename: 'Filename',
      hidecmb: 'Hidecmb',
      notification: 'Notification',
      notifyTopicName: 'NotifyTopicName',
      password: 'Password',
      permission: 'Permission',
      previewPages: 'PreviewPages',
      projectName: 'ProjectName',
      referer: 'Referer',
      sourceURI: 'SourceURI',
      user: 'User',
      userData: 'UserData',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cachePreview: 'boolean',
      credentialConfig: CredentialConfig,
      externalUploaded: 'boolean',
      filename: 'string',
      hidecmb: 'boolean',
      notification: Notification,
      notifyTopicName: 'string',
      password: 'string',
      permission: WebofficePermission,
      previewPages: 'number',
      projectName: 'string',
      referer: 'string',
      sourceURI: 'string',
      user: WebofficeUser,
      userData: 'string',
      watermark: WebofficeWatermark,
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.permission && typeof (this.permission as any).validate === 'function') {
      (this.permission as any).validate();
    }
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    if(this.watermark && typeof (this.watermark as any).validate === 'function') {
      (this.watermark as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

