// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogsRequest extends $dara.Model {
  /**
   * @example
   * dev
   */
  environment?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'environment',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

