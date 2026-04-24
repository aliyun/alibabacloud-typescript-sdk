// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysRequest extends $dara.Model {
  /**
   * @example
   * rds_copilot***_public_cn-*********6
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

