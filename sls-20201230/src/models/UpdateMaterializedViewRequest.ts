// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMaterializedViewRequest extends $dara.Model {
  aggIntervalMins?: number;
  enable?: boolean;
  originalSql?: string;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      aggIntervalMins: 'aggIntervalMins',
      enable: 'enable',
      originalSql: 'originalSql',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggIntervalMins: 'number',
      enable: 'boolean',
      originalSql: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

