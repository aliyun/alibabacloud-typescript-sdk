// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Property } from "./Property";


export class Connector extends $dara.Model {
  creator?: string;
  creatorName?: string;
  dependencies?: string[];
  lookup?: boolean;
  modifier?: string;
  modifierName?: string;
  name?: string;
  properties?: Property[];
  sink?: boolean;
  source?: boolean;
  supportedFormats?: string[];
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

