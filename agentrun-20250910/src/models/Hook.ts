// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Hook extends $dara.Model {
  apiVersion?: string;
  description?: string;
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  event?: string;
  headers?: { [key: string]: string };
  timeout?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'apiVersion',
      description: 'description',
      enabled: 'enabled',
      event: 'event',
      headers: 'headers',
      timeout: 'timeout',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      description: 'string',
      enabled: 'boolean',
      event: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      timeout: 'number',
      url: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

