// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The pricing request body, including popCode, popVersion, apiName, and parameters. All calls return a unified pricing envelope. The language parameter specifies the server-side message language, such as en or zh. Target resource operations are not executed for cost-irrelevant or unsupported pricing queries.
   * 
   * @example
   * {"popCode":"ecs","popVersion":"2014-05-26","apiName":"CreateDisk","parameters":{"RegionId":"cn-hangzhou","ZoneId":"cn-hangzhou-i","DiskCategory":"cloud_essd","Size":40},"language":"zh"}
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

