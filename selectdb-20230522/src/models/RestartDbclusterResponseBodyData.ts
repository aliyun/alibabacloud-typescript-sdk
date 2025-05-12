// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDBClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-7213c8y****-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

