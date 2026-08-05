// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInfiniteCanvasRequest extends $dara.Model {
  /**
   * @example
   * 8fec0fd4172941f7a6213095c8657ecf
   */
  coverUrl?: string;
  /**
   * @example
   * pd_061716***
   */
  productionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 这是无限画布标题
   */
  title?: string;
  /**
   * @example
   * ws_2121**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      productionId: 'ProductionId',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      productionId: 'string',
      title: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

