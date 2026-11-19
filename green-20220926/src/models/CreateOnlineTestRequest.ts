// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOnlineTestRequest extends $dara.Model {
  /**
   * @remarks
   * The data ID.
   * 
   * @example
   * 4f27b8cc7c4544cb90b41882a5b36326
   */
  dataId?: string;
  /**
   * @remarks
   * The resource type. Valid values: voice (audio), image (image), file (document), text (text), and video (video).
   * 
   * @example
   * video
   */
  resourceType?: string;
  /**
   * @remarks
   * The service code. Specify a valid service code. The valid service code for online video testing is videoDetection. VideoModeration is not a valid value and returns a 406 online.test.failed error.
   * 
   * @example
   * videoDetection
   */
  serviceCode?: string;
  /**
   * @remarks
   * The detection URL.
   * 
   * @example
   * https://xxxxxxxxxx.com/data/data.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

