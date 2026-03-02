// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Property } from "./Property";


export class Connector extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who creates the connector.
   * 
   * @example
   * 183899668*******
   */
  creator?: string;
  /**
   * @remarks
   * The nickname of the user who creates the connector.
   * 
   * @example
   * userA
   */
  creatorName?: string;
  /**
   * @remarks
   * The additional dependency files.
   */
  dependencies?: string[];
  /**
   * @remarks
   * Indicates whether the connector can be used as a lookup table.
   * 
   * @example
   * true
   */
  lookup?: boolean;
  /**
   * @remarks
   * The ID of the user who modifies the connector.
   * 
   * @example
   * 183899668*******
   */
  modifier?: string;
  /**
   * @remarks
   * The nickname of the user who modifies the connector.
   * 
   * @example
   * userA
   */
  modifierName?: string;
  /**
   * @remarks
   * The name of the connector.
   * 
   * @example
   * mysql-test
   */
  name?: string;
  /**
   * @remarks
   * The parameter configurations.
   */
  properties?: Property[];
  /**
   * @remarks
   * Indicates whether the connector can be used as the sink.
   * 
   * @example
   * true
   */
  sink?: boolean;
  /**
   * @remarks
   * Indicates whether the connector can be used as the source.
   * 
   * @example
   * flase
   */
  source?: boolean;
  /**
   * @remarks
   * The array of formats that are supported by the connector.
   */
  supportedFormats?: string[];
  /**
   * @remarks
   * The type of the connector.
   * 
   * @example
   * mysql-test
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      creatorName: 'creatorName',
      dependencies: 'dependencies',
      lookup: 'lookup',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      properties: 'properties',
      sink: 'sink',
      source: 'source',
      supportedFormats: 'supportedFormats',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      creatorName: 'string',
      dependencies: { 'type': 'array', 'itemType': 'string' },
      lookup: 'boolean',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      properties: { 'type': 'array', 'itemType': Property },
      sink: 'boolean',
      source: 'boolean',
      supportedFormats: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    if(Array.isArray(this.supportedFormats)) {
      $dara.Model.validateArray(this.supportedFormats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

