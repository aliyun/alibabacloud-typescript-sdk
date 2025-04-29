// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLablesResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  isDesignated?: boolean;
  /**
   * @example
   * gray
   */
  label?: string;
  /**
   * @example
   * true
   */
  online?: boolean;
  /**
   * @example
   * 2
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      isDesignated: 'IsDesignated',
      label: 'Label',
      online: 'Online',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDesignated: 'boolean',
      label: 'string',
      online: 'boolean',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

