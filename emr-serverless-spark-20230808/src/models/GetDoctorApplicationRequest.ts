// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The language of diagnostic information.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The query time.
   * 
   * @example
   * 2024-01-01
   */
  queryTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      locale: 'locale',
      queryTime: 'queryTime',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locale: 'string',
      queryTime: 'string',
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

