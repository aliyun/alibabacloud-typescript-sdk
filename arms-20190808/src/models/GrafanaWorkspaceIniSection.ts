// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GrafanaWorkspaceIniProperty } from "./GrafanaWorkspaceIniProperty";


export class GrafanaWorkspaceIniSection extends $dara.Model {
  propertys?: GrafanaWorkspaceIniProperty[];
  section?: string;
  static names(): { [key: string]: string } {
    return {
      propertys: 'propertys',
      section: 'section',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertys: { 'type': 'array', 'itemType': GrafanaWorkspaceIniProperty },
      section: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertys)) {
      $dara.Model.validateArray(this.propertys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

