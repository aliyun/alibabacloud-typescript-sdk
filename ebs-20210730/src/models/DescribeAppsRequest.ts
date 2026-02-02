// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsRequest extends $dara.Model {
  appIds?: string[];
  /**
   * @example
   * App1,App2
   */
  appNames?: string[];
  /**
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @example
   * 1485558146415628
   */
  owner?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      appNames: 'AppNames',
      clientToken: 'ClientToken',
      owner: 'Owner',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'array', 'itemType': 'string' },
      appNames: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      owner: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appIds)) {
      $dara.Model.validateArray(this.appIds);
    }
    if(Array.isArray(this.appNames)) {
      $dara.Model.validateArray(this.appNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

