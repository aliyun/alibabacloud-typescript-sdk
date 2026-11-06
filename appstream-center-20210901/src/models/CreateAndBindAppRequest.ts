// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndBindAppRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the application icon. Specify an accessible icon URL to display a custom icon.
   * 
   * @example
   * https://example.com/apps/business/icon.png
   */
  appIconUrl?: string;
  /**
   * @remarks
   * The name of the application to be created, which is used to identify the application in the image.
   * 
   * This parameter is required.
   * 
   * @example
   * Business management platform
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the image to which the application is bound. The image must be a custom image or community image that can be managed by the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * imgc-bp1example****
   */
  imageId?: string;
  /**
   * @remarks
   * The application type. If omitted, the default value is CLIENT_BASE. Valid values:
   * 
   * - **CLIENT_BASE**: Client application.
   * - **WEB_BASE**: Browser application.
   * - **CLOUD_NATIVE_BASE**: Cloud-native application.
   * - **PORT_SERVICE_BASE**: Port service application.
   * - **AGENT_SERVICE_BASE**: Agent application.
   * 
   * @example
   * PORT_SERVICE_BASE
   */
  originAppType?: string;
  /**
   * @remarks
   * The application service port. For applications that require port-based access, specify the actual port number that the application listens on.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The path suffix of the application access URL, which is used together with the application service port to describe the access entry point.
   * 
   * @example
   * /console
   */
  urlSuffix?: string;
  /**
   * @remarks
   * The ID of the image version to which the application is bound. If omitted, the current active version of the image specified by ImageId is used. If specified, the version must belong to the image.
   * 
   * @example
   * iv-bp1example****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appIconUrl: 'AppIconUrl',
      appName: 'AppName',
      imageId: 'ImageId',
      originAppType: 'OriginAppType',
      port: 'Port',
      urlSuffix: 'UrlSuffix',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIconUrl: 'string',
      appName: 'string',
      imageId: 'string',
      originAppType: 'string',
      port: 'string',
      urlSuffix: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

