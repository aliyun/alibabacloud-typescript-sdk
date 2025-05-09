// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableDesignProjectInfoResponseBodyProjectInfoBaseDatabase } from "./GetTableDesignProjectInfoResponseBodyProjectInfoBaseDatabase";


export class GetTableDesignProjectInfoResponseBodyProjectInfo extends $dara.Model {
  /**
   * @remarks
   * The information about the change base database of the schema design ticket.
   */
  baseDatabase?: GetTableDesignProjectInfoResponseBodyProjectInfoBaseDatabase;
  /**
   * @remarks
   * The ID of the user who created the ticket.
   * 
   * @example
   * 71****
   */
  creatorId?: number;
  /**
   * @remarks
   * The description of the schema design project.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time when the ticket was created.
   * 
   * @example
   * 2024-04-23 02:57:01
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the ticket was last modified.
   * 
   * @example
   * 2024-04-23 02:57:01
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * 95****
   */
  orderId?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 12****
   */
  projectId?: number;
  /**
   * @remarks
   * The state of the schema design project. Valid values:
   * 
   * *   **DESIGN**: The schema is being designed.
   * *   **PUBLISHED**: The schema is published.
   * *   **CLOSE**: The ticket is closed.
   * 
   * @example
   * DESIGN
   */
  status?: string;
  /**
   * @remarks
   * The name of the schema design project.
   * 
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      baseDatabase: 'BaseDatabase',
      creatorId: 'CreatorId',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      orderId: 'OrderId',
      projectId: 'ProjectId',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseDatabase: GetTableDesignProjectInfoResponseBodyProjectInfoBaseDatabase,
      creatorId: 'number',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      orderId: 'number',
      projectId: 'number',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.baseDatabase && typeof (this.baseDatabase as any).validate === 'function') {
      (this.baseDatabase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

