// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInfiniteCanvasRequest extends $dara.Model {
  /**
   * @remarks
   * The cover URL.
   * 
   * @example
   * 8fec0fd4172941f7a6213095c8657ecf
   */
  coverUrl?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_061716***
   */
  productionId?: string;
  /**
   * @remarks
   * The title of the infinite canvas.
   * 
   * This parameter is required.
   * 
   * @example
   * This is the infinite canvas title
   */
  title?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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

