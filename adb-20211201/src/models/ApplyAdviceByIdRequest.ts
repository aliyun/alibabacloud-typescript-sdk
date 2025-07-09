// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyAdviceByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The date on which you want to apply the suggestion. Format: yyyyMMdd.
   * 
   * @example
   * 20221101
   */
  adviceDate?: number;
  /**
   * @remarks
   * The suggestion ID.
   * 
   * @example
   * 0baf1f52-53df-487f-8292-99a03716****
   */
  adviceId?: string;
  applyType?: string;
  buildImmediately?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      adviceDate: 'AdviceDate',
      adviceId: 'AdviceId',
      applyType: 'ApplyType',
      buildImmediately: 'BuildImmediately',
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceDate: 'number',
      adviceId: 'string',
      applyType: 'string',
      buildImmediately: 'boolean',
      DBClusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

