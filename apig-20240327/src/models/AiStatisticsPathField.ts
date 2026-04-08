// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiStatisticsPathField extends $dara.Model {
  category?: string;
  description?: string;
  fieldKey?: string;
  io?: string;
  jsonPath?: string;
  name?: string;
  recordEnabled?: boolean;
  rule?: string;
  sensitive?: boolean;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      description: 'description',
      fieldKey: 'fieldKey',
      io: 'io',
      jsonPath: 'jsonPath',
      name: 'name',
      recordEnabled: 'recordEnabled',
      rule: 'rule',
      sensitive: 'sensitive',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      fieldKey: 'string',
      io: 'string',
      jsonPath: 'string',
      name: 'string',
      recordEnabled: 'boolean',
      rule: 'string',
      sensitive: 'boolean',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

