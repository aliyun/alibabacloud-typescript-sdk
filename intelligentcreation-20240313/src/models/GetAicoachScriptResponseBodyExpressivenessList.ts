// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachScriptResponseBodyExpressivenessList extends $dara.Model {
  desc?: string;
  enabled?: boolean;
  expressivenessId?: string;
  name?: string;
  rule?: string;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enabled: 'enabled',
      expressivenessId: 'expressivenessId',
      name: 'name',
      rule: 'rule',
      type: 'type',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enabled: 'boolean',
      expressivenessId: 'string',
      name: 'string',
      rule: 'string',
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

