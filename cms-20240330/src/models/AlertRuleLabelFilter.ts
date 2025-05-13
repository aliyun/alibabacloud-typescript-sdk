// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleLabelFilter extends $dara.Model {
  labels?: { [key: string]: string };
  opt?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
      opt: 'opt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      opt: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

