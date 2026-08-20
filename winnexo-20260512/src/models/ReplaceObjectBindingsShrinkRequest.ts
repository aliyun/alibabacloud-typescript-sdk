// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceObjectBindingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The new list of object bindings (full replacement. Pass an empty list to clear all bindings).
   * 
   * This parameter is required.
   */
  objectBindingsShrink?: string;
  /**
   * @remarks
   * The ID of the personal FILE data source to be replaced (unique within the tenant).
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. Pass it explicitly through winnexo-cli using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      objectBindingsShrink: 'objectBindings',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectBindingsShrink: 'string',
      sourceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

