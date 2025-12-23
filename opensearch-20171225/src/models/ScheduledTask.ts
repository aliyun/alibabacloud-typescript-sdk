// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduledTaskFilter extends $dara.Model {
  days?: number;
  expression?: string;
  field?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'days',
      expression: 'expression',
      field: 'field',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: 'number',
      expression: 'string',
      field: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledTask extends $dara.Model {
  autoSwitch?: boolean;
  cron?: string;
  enabled?: boolean;
  filter?: ScheduledTaskFilter;
  forkedAppId?: string;
  permanent?: boolean;
  runNow?: boolean;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      autoSwitch: 'autoSwitch',
      cron: 'cron',
      enabled: 'enabled',
      filter: 'filter',
      forkedAppId: 'forkedAppId',
      permanent: 'permanent',
      runNow: 'runNow',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSwitch: 'boolean',
      cron: 'string',
      enabled: 'boolean',
      filter: ScheduledTaskFilter,
      forkedAppId: 'string',
      permanent: 'boolean',
      runNow: 'boolean',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

