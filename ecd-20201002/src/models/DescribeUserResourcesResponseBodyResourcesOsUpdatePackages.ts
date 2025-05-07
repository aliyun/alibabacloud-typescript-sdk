// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcesResponseBodyResourcesOsUpdatePackages extends $dara.Model {
  description?: string;
  kb?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      kb: 'Kb',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      kb: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

