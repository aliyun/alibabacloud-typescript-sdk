// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 1
   */
  initialQueryId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      initialQueryId: 'InitialQueryId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      initialQueryId: 'string',
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

