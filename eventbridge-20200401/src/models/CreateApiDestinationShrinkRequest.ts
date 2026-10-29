// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiDestinationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the API destination. The name must be 2 to 127 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * api-destination-name
   */
  apiDestinationName?: string;
  /**
   * @remarks
   * The name of the connection configuration. The name must be 2 to 127 characters in length.
   * 
   * <notice>Before calling this operation, call the Connection operation to create a connection configuration. Set ConnectionName to the name of an existing connection.
   * 
   * This parameter is required.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  /**
   * @remarks
   * The description of the API destination. The description can be up to 255 characters in length.
   * 
   * @example
   * Description of the connection configuration
   */
  description?: string;
  /**
   * @remarks
   * The configuration information of the API destination.
   * 
   * This parameter is required.
   */
  httpApiParametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      connectionName: 'ConnectionName',
      description: 'Description',
      httpApiParametersShrink: 'HttpApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
      connectionName: 'string',
      description: 'string',
      httpApiParametersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

