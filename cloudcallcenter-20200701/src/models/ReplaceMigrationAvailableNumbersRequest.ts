// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceMigrationAvailableNumbersRequest extends $dara.Model {
  instanceId?: string;
  operatorName?: string;
  operatorUid?: number;
  v1Numbers?: string;
  v2Numbers?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      operatorName: 'OperatorName',
      operatorUid: 'OperatorUid',
      v1Numbers: 'V1Numbers',
      v2Numbers: 'V2Numbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      operatorName: 'string',
      operatorUid: 'number',
      v1Numbers: 'string',
      v2Numbers: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

