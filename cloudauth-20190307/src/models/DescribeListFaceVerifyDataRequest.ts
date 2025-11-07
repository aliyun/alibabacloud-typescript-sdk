// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListFaceVerifyDataRequest extends $dara.Model {
  /**
   * @remarks
   * End time of the query.
   * 
   * @example
   * 1760630399999
   */
  gmtEnd?: number;
  /**
   * @remarks
   * Start time of the query.
   * 
   * @example
   * 1760025600000
   */
  gmtStart?: number;
  /**
   * @remarks
   * Product Code, currently deprecated.
   * 
   * @example
   * Liveness
   */
  name?: string;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 1000000339
   */
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtEnd: 'GmtEnd',
      gmtStart: 'GmtStart',
      name: 'Name',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtEnd: 'number',
      gmtStart: 'number',
      name: 'string',
      sceneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

