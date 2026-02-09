// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WelcomeBlock extends $dara.Model {
  description?: string;
  displayType?: string;
  icon?: string;
  label?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayType: 'DisplayType',
      icon: 'Icon',
      label: 'Label',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayType: 'string',
      icon: 'string',
      label: 'string',
      type: 'string',
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

