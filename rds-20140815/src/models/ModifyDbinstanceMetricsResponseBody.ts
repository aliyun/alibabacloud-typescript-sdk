// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceMetricsResponseBody extends $dara.Model {
  DBInstanceId?: string;
  requestId?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
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

