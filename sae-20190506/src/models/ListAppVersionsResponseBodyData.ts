// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppVersionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL of the code package. If you use the SAE console to upload the code package, take note of the following items:
   * 
   * *   You cannot download the URL. You must call the GetPackageVersionAccessableUrl operation to obtain the URL. The obtained URL is valid for 10 minutes.
   * *   SAE can retain the package up to 90 days. After 90 days, the URL cannot be returned or downloaded.
   */
  buildPackageUrl?: string;
  /**
   * @remarks
   * The download link of the WAR or JAR package. This parameter is returned when the **Type** parameter is set to **url**.
   * 
   * @example
   * 1590124643553
   */
  createTime?: string;
  /**
   * @remarks
   * The error code.
   * 
   * *   The **ErrorCode** parameter is not returned when the request succeeds.
   * *   The **ErrorCode** parameter is returned when the request fails. For more information, see **Error codes** in this topic.
   * 
   * @example
   * a0ce266c-d354-423a-9bd6-4083405a****
   */
  id?: string;
  /**
   * @remarks
   * The deployment method of the application. Valid values:
   * 
   * *   **image**: indicates that the application is deployed by using an image.
   * *   **url**: indicates that the application is deployed by using a code package.
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * The URL of the image.
   */
  warUrl?: string;
  static names(): { [key: string]: string } {
    return {
      buildPackageUrl: 'BuildPackageUrl',
      createTime: 'CreateTime',
      id: 'Id',
      type: 'Type',
      warUrl: 'WarUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildPackageUrl: 'string',
      createTime: 'string',
      id: 'string',
      type: 'string',
      warUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

