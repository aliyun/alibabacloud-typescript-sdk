// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMetricRuleTargetsRequestTargets extends $dara.Model {
  arn?: string;
  id?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      id: 'Id',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      id: 'string',
      level: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

