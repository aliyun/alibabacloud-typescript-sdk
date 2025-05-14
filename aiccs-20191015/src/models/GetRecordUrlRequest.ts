// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1001067****
   */
  acid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DUP_CALL
   */
  recordType?: string;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      instanceId: 'InstanceId',
      recordType: 'RecordType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      instanceId: 'string',
      recordType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

