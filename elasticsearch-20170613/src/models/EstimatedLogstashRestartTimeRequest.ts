// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedLogstashRestartTimeRequest extends $dara.Model {
  body?: string;
  /**
   * @remarks
   * Specifies whether to forcibly restart the cluster. Default value: false.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

