// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return large detail fields (settings / notes / structuredTables / unstructuredDocs). Default value: False, which returns only metadata.
   * 
   * @example
   * false
   */
  includeDetails?: boolean;
  /**
   * @remarks
   * The primary ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID to which the task belongs.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      includeDetails: 'includeDetails',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeDetails: 'boolean',
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

