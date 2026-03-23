// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricsConfig?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      metricsConfig: 'MetricsConfig',
      resourceOwnerId: 'ResourceOwnerId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      metricsConfig: 'string',
      resourceOwnerId: 'number',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

