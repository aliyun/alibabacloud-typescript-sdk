// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceIniProperty extends $dara.Model {
  defaultValue?: string;
  description?: string;
  example?: string;
  key?: string;
  secret?: boolean;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'defaultValue',
      description: 'description',
      example: 'example',
      key: 'key',
      secret: 'secret',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      example: 'string',
      key: 'string',
      secret: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

