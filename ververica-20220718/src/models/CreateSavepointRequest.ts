// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSavepointRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 58718c99-3b29-4c5e-93bb-c9fc4ec6****
   */
  deploymentId?: string;
  /**
   * @remarks
   * The description of the savepoint.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to use the native format mode. Valid values:
   * 
   * *   true: The native format mode is used.
   * *   false: The native format mode is not used.
   * 
   * @example
   * true
   */
  nativeFormat?: boolean;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      description: 'description',
      nativeFormat: 'nativeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      description: 'string',
      nativeFormat: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

