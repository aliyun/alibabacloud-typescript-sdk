// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRiskListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-pe335pgxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 0
   */
  startIndex?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startIndex: 'StartIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageSize: 'number',
      regionId: 'string',
      startIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

