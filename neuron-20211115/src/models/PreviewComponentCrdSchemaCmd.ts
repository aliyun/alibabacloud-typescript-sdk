// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConfigModel } from "./ConfigModel";


export class PreviewComponentCrdSchemaCmd extends $dara.Model {
  address?: string;
  configuration?: ConfigModel[];
  credentials?: string;
  id?: number;
  isCustom?: boolean;
  name?: string;
  reesourceVersion?: string;
  resourceId?: number;
  scope?: string;
  templateId?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      configuration: 'configuration',
      credentials: 'credentials',
      id: 'id',
      isCustom: 'isCustom',
      name: 'name',
      reesourceVersion: 'reesourceVersion',
      resourceId: 'resourceId',
      scope: 'scope',
      templateId: 'templateId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      configuration: { 'type': 'array', 'itemType': ConfigModel },
      credentials: 'string',
      id: 'number',
      isCustom: 'boolean',
      name: 'string',
      reesourceVersion: 'string',
      resourceId: 'number',
      scope: 'string',
      templateId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configuration)) {
      $dara.Model.validateArray(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

