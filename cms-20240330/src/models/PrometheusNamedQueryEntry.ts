// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrometheusNamedQueryEntry extends $dara.Model {
  expr?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      expr: 'expr',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expr: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

