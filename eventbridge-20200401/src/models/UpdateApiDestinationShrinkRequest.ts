// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiDestinationShrinkRequest extends $dara.Model {
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
   * The name of the connection. The name must be 2 to 127 characters in length.
   * 
   * Note: Before you configure this parameter, you must call the CreateConnection operation to create a connection. Then, set this parameter to the name of the connection that you created.
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
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The parameters that are configured for the API destination.
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

