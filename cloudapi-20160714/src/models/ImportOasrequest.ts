// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOASRequest extends $dara.Model {
  /**
   * @remarks
   * The security authentication method of the API. Valid values:
   * 
   * *   **APP: Only authorized applications can call the API.**
   * 
   * *   **ANONYMOUS: The API can be anonymously called. In this mode, you must take note of the following rules:**
   * 
   *     *   All users who have obtained the API service information can call this API. API Gateway does not authenticate callers and cannot set user-specific throttling policies. If you make this API public, set API-specific throttling policies.
   * 
   * @example
   * APP
   */
  authType?: string;
  /**
   * @remarks
   * The name of the backend service.
   * 
   * @example
   * testBackendService
   */
  backendName?: string;
  /**
   * @remarks
   * The OAS-compliant text file or OSS object URL.
   * 
   * This parameter is required.
   * 
   * @example
   * swagger: "2.0"
   * info:
   *   version: "1.0.0"
   *   title: "Swagger Petstore 2.0"
   * basePath: "/"
   * schemes:
   * - "https"
   * - "http"
   * paths:
   *   /pet/findByStatus:
   *     get:
   *       tags:
   *       - "pet"
   *       summary: "Finds Pets by status"
   *       operationId: "findPetsByStatus"
   *       parameters:
   *       - name: "status"
   *         in: "query"
   *         required: true
   *         type: "array"
   *         items:
   *           type: "string"
   *           enum:
   *           - "available"
   *           - "pending"
   *           - "sold"
   *           default: "available"
   *         collectionFormat: "multi"
   *       responses:
   *         "200":
   *           description: "successful operation"
   *           schema:
   *             type: "array"
   *             items:
   *               $ref: "#/definitions/Pet"
   *         "400":
   *           description: "Invalid status value"
   * definitions:
   *   Category:
   *     type: "object"
   *     properties:
   *       id:
   *         type: "integer"
   *         format: "int64"
   *       name:
   *         type: "string"
   *   Tag:
   *     type: "object"
   *     properties:
   *       id:
   *         type: "integer"
   *         format: "int64"
   *       name:
   *         type: "string"
   *   Pet:
   *     type: "object"
   *     required:
   *     - "name"
   *     - "photoUrls"
   *     properties:
   *       id:
   *         type: "integer"
   *         format: "int64"
   *       category:
   *         $ref: "#/definitions/Category"
   *       name:
   *         type: "string"
   *         example: "doggie"
   *       photoUrls:
   *         type: "array"
   *         items:
   *           type: "string"
   *       tags:
   *         type: "array"
   *         items:
   *           $ref: "#/definitions/Tag"
   *       status:
   *         type: "string"
   *         description: "pet status in the store"
   *         enum:
   *         - "available"
   *         - "pending"
   *         - "sold"
   */
  data?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 08ae4aa0f95e4321849ee57f4e0b3077
   */
  groupId?: string;
  /**
   * @remarks
   * Specifies whether to ignore alerts.
   * 
   * @example
   * true
   */
  ignoreWarning?: boolean;
  /**
   * @remarks
   * The OAS version.
   * 
   * @example
   * OAS2
   */
  OASVersion?: string;
  /**
   * @remarks
   * Specifies whether to overwrite an existing API.
   * 
   * If an existing API has the same HTTP request type and backend request path as the API to be imported, the existing API is overwritten.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The request mode. Valid values:
   * 
   * *   MAPPING: Parameters are mapped. Unknown parameters are filtered out.
   * *   PASSTHROUGH: Parameters are passed through.
   * 
   * @example
   * PASSTHROUGH
   */
  requestMode?: string;
  securityToken?: string;
  /**
   * @remarks
   * Specifies whether to directly import the API without performing a precheck.
   * 
   * @example
   * true
   */
  skipDryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      backendName: 'BackendName',
      data: 'Data',
      groupId: 'GroupId',
      ignoreWarning: 'IgnoreWarning',
      OASVersion: 'OASVersion',
      overwrite: 'Overwrite',
      requestMode: 'RequestMode',
      securityToken: 'SecurityToken',
      skipDryRun: 'SkipDryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      backendName: 'string',
      data: 'string',
      groupId: 'string',
      ignoreWarning: 'boolean',
      OASVersion: 'string',
      overwrite: 'boolean',
      requestMode: 'string',
      securityToken: 'string',
      skipDryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

