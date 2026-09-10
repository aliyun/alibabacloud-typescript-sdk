// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCronExecTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The Cron expression. Replace spaces with plus signs `+` when passing the expression as a query parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 0+0+0+*+*+?
   */
  cronRule?: string;
  static names(): { [key: string]: string } {
    return {
      cronRule: 'cronRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

