// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSourceContentRequest extends $dara.Model {
  /**
   * @remarks
   * The returned content.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to force synchronous processing.
   * 
   * @example
   * false
   */
  forceSync?: boolean;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      forceSync: 'forceSync',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      forceSync: 'boolean',
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

