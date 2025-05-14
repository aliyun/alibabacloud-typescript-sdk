// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineCallActionRequest extends $dara.Model {
  /**
   * @example
   * {"time":1}
   */
  acc?: string;
  /**
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @example
   * 1
   */
  act?: number;
  /**
   * @example
   * {"name":123}
   */
  biz?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d9****
   */
  clientToken?: string;
  /**
   * @example
   * hotlinebs_out
   */
  fromSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acc: 'Acc',
      accountName: 'AccountName',
      act: 'Act',
      biz: 'Biz',
      clientToken: 'ClientToken',
      fromSource: 'FromSource',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acc: 'string',
      accountName: 'string',
      act: 'number',
      biz: 'string',
      clientToken: 'string',
      fromSource: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

