// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResourceMeasureRequest extends $dara.Model {
  /**
   * @remarks
   * Belonging ID (site ID or Alibaba Cloud User ID)
   * 
   * @example
   * 123456
   */
  belongId?: string;
  /**
   * @remarks
   * Belonging ID Type (siteId, uid)
   * 
   * @example
   * USER
   */
  belongIdType?: string;
  /**
   * @remarks
   * ESP business type
   * 
   * @example
   * 1
   */
  bizType?: string;
  /**
   * @remarks
   * ESP business ID
   * 
   * @example
   * p20202933455
   */
  espBizId?: string;
  /**
   * @remarks
   * Order module information (when empty, espBizId and bizType cannot be empty)
   * 
   * @example
   * {"siteversion":"test"}
   */
  orderComponentParams?: string;
  /**
   * @remarks
   * Resource identity
   * 
   * @example
   * InspirationTokens
   */
  resourceCode?: string;
  /**
   * @remarks
   * Resource value; default is empty. Required only for feature-type resources. 0 indicates not supported, and 1 indicates supported.
   * 
   * @example
   * 1
   */
  resourceValue?: number;
  static names(): { [key: string]: string } {
    return {
      belongId: 'BelongId',
      belongIdType: 'BelongIdType',
      bizType: 'BizType',
      espBizId: 'EspBizId',
      orderComponentParams: 'OrderComponentParams',
      resourceCode: 'ResourceCode',
      resourceValue: 'ResourceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongId: 'string',
      belongIdType: 'string',
      bizType: 'string',
      espBizId: 'string',
      orderComponentParams: 'string',
      resourceCode: 'string',
      resourceValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

