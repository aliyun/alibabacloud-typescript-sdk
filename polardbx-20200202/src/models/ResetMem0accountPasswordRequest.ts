// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetMem0AccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hzravgpt8q****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * aafdf2e7d0988ef623***
   */
  mem0ApiKey?: string;
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
      DBInstanceName: 'DBInstanceName',
      mem0ApiKey: 'Mem0ApiKey',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      mem0ApiKey: 'string',
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

