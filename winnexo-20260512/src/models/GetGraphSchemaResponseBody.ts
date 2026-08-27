// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGraphSchemaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The graph name.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The active QueryAgent registered schema ID corresponding to the graph. The value is null if not yet registered.
   * 
   * @example
   * schema_123456
   */
  schemaId?: string;
  /**
   * @remarks
   * The version.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  schemaVersion?: string;
  /**
   * @remarks
   * The raw YAML text of the Graph Schema trimmed by READ permissions, retaining $ref references within the authorized subgraph.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  yamlEdit?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      graphName: 'graphName',
      message: 'message',
      requestId: 'requestId',
      schemaId: 'schemaId',
      schemaVersion: 'schemaVersion',
      yamlEdit: 'yamlEdit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      graphName: 'string',
      message: 'string',
      requestId: 'string',
      schemaId: 'string',
      schemaVersion: 'string',
      yamlEdit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

