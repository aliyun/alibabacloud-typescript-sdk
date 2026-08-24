// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataResultValue extends $dara.Model {
  /**
   * @remarks
   * The SQL template ID.
   * 
   * @example
   * 61f45ee381b2fa4e8a6545e3bee9
   */
  sqlId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of errors.
   * 
   * @example
   * 10
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      sqlId: 'sqlId',
      instanceId: 'instanceId',
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlId: 'string',
      instanceId: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

