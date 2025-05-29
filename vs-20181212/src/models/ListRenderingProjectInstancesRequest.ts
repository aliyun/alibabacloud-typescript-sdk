// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingProjectInstancesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @example
   * Idle
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      renderingInstanceId: 'RenderingInstanceId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      renderingInstanceId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

